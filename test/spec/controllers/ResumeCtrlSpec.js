'use strict';

describe('Resume Controller', function () {
    beforeEach(angular.module('resumeSvc'));

    it('should have a ResumeCtrl', function(){
        expect(ResumeCtrl).to.not.equal(null);
    });
});