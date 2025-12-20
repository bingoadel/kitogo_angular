import { ApiUrlResolver } from './apiurlresolver';

describe('ApiUrlResolver', () => {
    let resolver: ApiUrlResolver;

    beforeEach(() => {
        resolver = new ApiUrlResolver();
    });

    it('soll die URL für registration korrekt zurückgeben', () => {
        const url = resolver.getUrl('registration');
        expect(url).toBe('http://87.106.41.173:8080/UserManagement/RegisterUser');
    });

    it('soll die URL für activateaccount korrekt zurückgeben', () => {
        const url = resolver.getUrl('activateaccount');
        expect(url).toBe('http://87.106.41.173:8080/UserManagement/ActivateUserAccount');
    });

    it('soll die URL für loginuser korrekt zurückgeben', () => {
        const url = resolver.getUrl('loginuser');
        expect(url).toBe('http://87.106.41.173:8080/UserManagement/LoginUser');
    });

    it('soll die URL für promtanswer korrekt zurückgeben', () => {
        const url = resolver.getUrl('promtanswer');
        expect(url).toBe('http://87.106.41.173:8080/KiTools/PromtAnswerTool');
    });

    it('soll einen Fehler werfen, wenn der Action-Key nicht existiert', () => {
        expect(() => resolver.getUrl('doesNotExist')).toThrowError(
            "Action-Key 'doesNotExist' nicht gefunden"
        );
    });
});