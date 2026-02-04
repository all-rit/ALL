import { React, useContext, useMemo, useState } from 'react';
import { startExercise } from 'src/reducers/lab2/actions';
import { navigate } from '@reach/router';
import AIChatBot from '../components/AIChatBot';
import { Tabs } from '../components/Tab/Tabs';
import { Tab } from '../components/Tab/Tab';
import RatingModal from '../components/RatingModal';
import ExerciseStateContext from '../Lab13Context';
import {
    BIAS_TYPES,
    BIAS_DEFINITIONS,
    getTopicById,
} from 'src/constants/lab13/BiasQuestionsConfig';

const AIPanel = () => {
    const { rankingColumns } = useContext(ExerciseStateContext);
    const [topicIndex, setTopicIndex] = useState(0);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [toneRating, setToneRating] = useState('');
    const [confidenceRating, setConfidenceRating] = useState('');
    const [showBiasExplanation, setShowBiasExplanation] = useState(false);
    const [selectedBiasData, setSelectedBiasData] = useState(null);

    // Get all three topics in order: medium, most, least
    const getOrderedTopics = useMemo(() => {
        if (!rankingColumns || rankingColumns.length === 0) {
            return [];
        }

        const topics = [];
        // Medium knowledgeable (index 1) - Halo Effect
        if (rankingColumns[1]?.cards?.length > 0) {
            topics.push({ id: rankingColumns[1].cards[0].id, biasPosition: 1 });
        }
        // Most knowledgeable (index 0) - Truth Bias
        if (rankingColumns[0]?.cards?.length > 0) {
            topics.push({ id: rankingColumns[0].cards[0].id, biasPosition: 0 });
        }
        // Least knowledgeable (index 2) - Dunning-Kruger
        if (rankingColumns[2]?.cards?.length > 0) {
            topics.push({ id: rankingColumns[2].cards[0].id, biasPosition: 2 });
        }

        return topics;
    }, [rankingColumns]);

    const currentTopic = getOrderedTopics && getOrderedTopics.length > 0 ? getOrderedTopics[topicIndex] || null : null;

    const getActiveBiasForTopic = (biasPosition) => {
        const biasMap = {
            0: BIAS_TYPES.TRUTH_BIAS, // Most knowledgeable
            1: BIAS_TYPES.HALO_EFFECT, // Medium knowledgeable
            2: BIAS_TYPES.DUNNING_KRUGER, // Least knowledgeable
        };
        return biasMap[biasPosition] || BIAS_TYPES.HALO_EFFECT;
    };

    const activeTopic = currentTopic ? currentTopic.id : null;

    const activeBias = currentTopic ? getActiveBiasForTopic(currentTopic.biasPosition) : BIAS_TYPES.HALO_EFFECT;

    // Get questions formatted for AIChatBot
    const generateQuestionsAndAnswers = () => {
        if (!activeTopic) {
            return { questions: [], answers: [] };
        }

        const topic = getTopicById(activeTopic);
        if (!topic) {
            return { questions: [], answers: [] };
        }

        const questions = topic.questions.map((q, index) => ({
            id: index + 1,
            text: q.text,
        }));

        const answers = topic.questions.map((q, index) => ({
            id: index + 1,
            text: q.answers[activeBias].text,
            isCorrect: q.answers[activeBias].isCorrect,
            explanation: q.answers[activeBias].explanation,
            biasType: activeBias,
            biasDefinition: BIAS_DEFINITIONS[activeBias],
        }));

        return { questions, answers };
    };

    const { questions, answers } = useMemo(() => generateQuestionsAndAnswers(), [activeTopic, activeBias]);

    const topicData = getTopicById(activeTopic);

    const handleAnswerSelected = (biasType, biasDefinition, explanation) => {
        setSelectedBiasData({ biasType, biasDefinition, explanation });
        setShowRatingModal(true);
    };

    const handleRatingSubmit = () => {
        setShowBiasExplanation(true);
    };

    const handleBiasExplanationClose = () => {
        // Close both modals first
        setShowBiasExplanation(false);
        setShowRatingModal(false);

        // Reset modal data
        setSelectedBiasData(null);
        setToneRating('');
        setConfidenceRating('');

        // Delay the topic index update to ensure modals are fully closed
        setTimeout(() => {
            // Move to next topic - use functional update to avoid stale closure
            setTopicIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                // Check if we've completed all topics
                if (nextIndex >= getOrderedTopics.length) {
                    // Navigate to next page after a small delay to ensure state settles
                    setTimeout(() => {
                        startExercise();
                        navigate('/Lab13/Exercise/HaloExplination');
                    }, 50);
                }
                return nextIndex;
            });
        }, 100);
    };

    return (
        <div>
            {activeTopic && topicData && (
                <>
                    <Tabs>
                        <Tab label="AIChatBot">
                            <div className="tw-h-[50%]">
                                <AIChatBot
                                    userQuestions={questions}
                                    fixedAIResponse={answers}
                                    onAnswerSelected={handleAnswerSelected}
                                />
                            </div>
                        </Tab>
                    </Tabs>

                    <RatingModal
                        show={showRatingModal}
                        setShow={setShowRatingModal}
                        toneRating={toneRating}
                        setToneRating={setToneRating}
                        confidenceRating={confidenceRating}
                        setConfidenceRating={setConfidenceRating}
                        onSubmit={handleRatingSubmit}
                        showTextModal={showBiasExplanation}
                        setShowTextModal={setShowBiasExplanation}
                        textModalHeader={
                            selectedBiasData ? (
                                <div className="tw-text-xl tw-font-bold tw-text-textGray tw-m-3">
                                    {BIAS_DEFINITIONS[selectedBiasData.biasType]?.name}
                                </div>
                            ) : null
                        }
                        textModalBody={
                            selectedBiasData ? (
                                <div className="tw-p-4 tw-text-sm tw-text-gray-700">
                                    <div className="tw-mb-6">
                                        <p className="tw-italic tw-text-gray-600 tw-border-l-4 tw-border-primary-blue tw-pl-4">
                                            {selectedBiasData.explanation}
                                        </p>
                                    </div>
                                    <div className="tw-bg-blue-50 tw-p-4 tw-rounded tw-mb-6">
                                        <h4 className="tw-font-bold tw-mb-2">
                                            Understanding {BIAS_DEFINITIONS[selectedBiasData.biasType]?.name}:
                                        </h4>
                                        <p>{BIAS_DEFINITIONS[selectedBiasData.biasType]?.definition}</p>
                                    </div>
                                </div>
                            ) : null
                        }
                        onCloseTextModal={handleBiasExplanationClose}
                    />
                </>
            )}

            {!activeTopic && (
                <div className="tw-text-center tw-py-8">
                    <p className="tw-text-lg tw-text-gray-600">
                        Please complete the ranking to see questions.
                    </p>
                </div>
            )}
        </div>
    );
};

export default AIPanel;
