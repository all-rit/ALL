import { Page } from '../../components/Page';
import { ROUTES } from '../../../../../constants/lab0/index';

export const LabIntroduction = () => {
  return (
    <Page nextPage={ROUTES.SECTION_LAB_INTRODUCTION} completed>
      <Page.Header>
        <Page.Header.Title>Lab Introduction</Page.Header.Title>
      </Page.Header>
      <Page.Body></Page.Body>
    </Page>
  );
};
