import Page from '../page';

export default class PortalPage extends Page {
    get linkCourses () { return $('[data-qa="topmenu-Courses"]'); }
    get linkCards () { return $('[data-qa="topmenu-Cards"]'); }
    get linkChallenges () { return $('[data-qa="topmenu-Challenges"]'); }
    get linkDiary () { return $('[data-qa="topmenu-Diary"]'); }

    goToCourses() {
        this.linkCourses.click();
    }

    goToCards() {
        this.linkCards.click();
    }

    goToChallenges() {
        this.linkChallenges.click();
    }

    goToDiary() {
        this.linkDiary.click();
    }

}