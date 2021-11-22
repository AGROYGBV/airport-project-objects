const CrewMember = require("./crew");

describe('CrewMember class', () => {
    test('crewMember has name', () => {
        const testCrew = new CrewMember('Anna')
        expect(testCrew.name).toBe('Anna')
    });
    test('crewMember has position', () => {
        const testCrew2 = new CrewMember('pilot')
        expect(testCrew2.position).toBe('pilot')
    });
    test('crewMember has staff ID #', () => {
        const testCrew3 = new CrewMember('326')
        expect(testCrew3.staffNumber).toBe('326')
    });
}); 

