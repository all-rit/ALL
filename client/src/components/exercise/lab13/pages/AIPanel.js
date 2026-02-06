import { React, useContext, useMemo, useState, useCallback } from 'react';
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
    const [showBiasExplanation, setShowBiasExplanation] = useState(false);
    const [selectedBiasData, setSelectedBiasData] = useState(null);
    const [currentAnswerData, setCurrentAnswerData] = useState(null);
    const [toneRating, setToneRating] = useState('');
    const [confidenceRating, setConfidenceRating] = useState('');
    const [loadQuestionsTrigger, setLoadQuestionsTrigger] = useState(0);

    const BIAS_POSITION_MAP = {
        0: BIAS_TYPES.TRUTH_BIAS, // Most knowledgeable
        1: BIAS_TYPES.HALO_EFFECT, // Medium knowledgeable
        2: BIAS_TYPES.DUNNING_KRUGER, // Least knowledgeable
    };

    // Get all three topics in order: medium, most, least
    const getOrderedTopics = useMemo(() => {
        if (!rankingColumns?.length) return [];

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

    const currentTopic = getOrderedTopics[topicIndex] || null;
    const activeTopic = currentTopic?.id || null;
    const activeBias = BIAS_POSITION_MAP[currentTopic?.biasPosition] || BIAS_TYPES.HALO_EFFECT;
    const topicData = getTopicById(activeTopic);

    const resetModalState = useCallback(() => {
        setShowBiasExplanation(false);
        setShowRatingModal(false);
        setSelectedBiasData(null);
        setCurrentAnswerData(null);
        setToneRating('');
        setConfidenceRating('');
    }, []);

    const handleRatingSubmit = useCallback(() => {
        setShowBiasExplanation(true);
    }, []);

    const handleBiasExplanationClose = useCallback(() => {
        resetModalState();

        setTimeout(() => {
            setTopicIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                if (nextIndex < getOrderedTopics.length) {
                    // Signal to load new questions
                    setLoadQuestionsTrigger((prev) => prev + 1);
                } else {
                    setTimeout(() => {
                        startExercise();
                        navigate('/Lab13/Exercise/AIandSearchPanel');
                    }, 50);
                }
                return nextIndex;
            });
        }, 100);
    }, [resetModalState, getOrderedTopics]);

    const biasDefinition = selectedBiasData ? BIAS_DEFINITIONS[selectedBiasData.biasType] : null;

    const questionData = useMemo(() => {
        if (!topicData) return { userQuestions: [], responses: [] };
        return {
            userQuestions: topicData.questions.map((q, i) => ({ id: i + 1, text: q.text })),
            responses: topicData.questions.map((q, i) => ({
                id: i + 1,
                text: q.answers[activeBias].text,
                isCorrect: q.answers[activeBias].isCorrect,
                explanation: q.answers[activeBias].explanation,
                biasType: activeBias,
                biasDefinition: BIAS_DEFINITIONS[activeBias],
            })),
        };
    }, [topicData, activeBias]);

    const biasExplanationContent = biasDefinition && selectedBiasData ? (
        <div className="tw-p-4 tw-text-sm tw-text-gray-700">
            <div className="tw-mb-6">
                <p className="tw-italic tw-text-gray-600 tw-border-l-4 tw-border-primary-blue tw-pl-4">
                    {selectedBiasData.explanation}
                </p>
            </div>
            <div className="tw-bg-blue-50 tw-p-4 tw-rounded tw-mb-6">
                <h4 className="tw-font-bold tw-mb-2">Understanding {biasDefinition.name}:</h4>
                <p>{biasDefinition.definition}</p>
            </div>
        </div>
    ) : null;

    return (
        <div>
            {activeTopic && topicData && (
                <>
                    <Tabs>
                        <Tab label="AIChatBot">
                            <div className="tw-h-full tw-flex tw-flex-col">
                                <div className="tw-flex-1 tw-overflow-auto">
                                    <AIChatBot
                                        userQuestions={questionData.userQuestions}
                                        fixedAIResponse={questionData.responses}
                                        onAnswerDataChange={setCurrentAnswerData}
                                        triggerLoadQuestions={loadQuestionsTrigger}
                                    />
                                </div>
                                <div className="tw-bg-white tw-flex tw-justify-center tw-py-4 tw-border-t tw-border-gray-200">
                                    {currentAnswerData && !showRatingModal && (
                                        <button
                                            onClick={() => {
                                                setSelectedBiasData(currentAnswerData);
                                                setShowRatingModal(true);
                                            }}
                                            className="tw-w-fit tw-bg-primary-blue hover:tw-bg-labBlue tw-text-white tw-font-bold tw-py-2 tw-px-6 tw-rounded-lg tw-transition-colors tw-duration-200"
                                        >
                                            Review ALL-IE&apos;s Response
                                        </button>
                                    )}
                                </div>
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
                            biasDefinition && (
                                <div className="tw-text-xl tw-font-bold tw-text-textGray tw-m-3">
                                    {biasDefinition.name}
                                </div>
                            )
                        }
                        textModalBody={biasExplanationContent}
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
