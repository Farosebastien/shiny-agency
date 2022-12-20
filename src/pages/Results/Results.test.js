import Results, { formatJobList, formatQueryParams } from "./Results";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { render } from "../../utils/test/index";

const resultsMockedData = [
    {
        title: "frontend",
        description: "le frontend se passe coté client"
    },
    {
        title: "mobile",
        description: "le mobile est souvent du développement natif"
    }
];

const server = setupServer(
    rest.get('http://localhost:8000/results', (req, res, ctx) => {
        return res(ctx.json({ resultsData: resultsMockedData }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe("results component", () => {

    it('Should display results titles', async () => {
        render(<Results />);
        await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
        const jobTitleElements = screen.getAllByTestId("job-title");
        expect(jobTitleElements[0].textContent).toBe("frontend");
        expect(jobTitleElements.length).toBe(2);
        const jobDescriptionElements = screen.getAllByTestId("job-description");
        expect(jobDescriptionElements[1].textContent).toBe(resultsMockedData[1].description);
        expect(jobDescriptionElements.length).toBe(2);
    });

});


describe("the formatJobList function", () => {

    it('should add a comma to a word', () => {
        const expectedState = 'item2,';
        expect(formatJobList("item2", 3, 1)).toEqual(expectedState);
    });

    it('should not add a comma to the last element ofthe list', () => {
        const expectedState = 'item3';
        expect(formatJobList("item3", 3, 2)).toEqual(expectedState);
    });

});

describe("the formatQueryParams function", () => {

    it("should use the right format for param", () => {
        const expectedState = "a1=answer1";
        expect(formatQueryParams({ 1: "answer1" })).toEqual(expectedState);
    });

    it("should concatenant params with an &", () => {
        const expectedState = "a1=answer1&a2=answer2";
        expect(formatQueryParams({ 1: "answer1", 2: "answer2" })).toEqual(expectedState);
    });

});