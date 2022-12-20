import { rest } from "msw";
import { setupServer } from "msw/node";
import { waitFor, screen, waitForElementToBeRemoved } from "@testing-library/react";
import Freelances from "./Freelances";
import { render } from "../../utils/test/index";

const freelancersMockedData = [
    {
        name: "Harry Potter",
        job: "Magicien frontend",
        picture: ""
    },
    {
        name: "Sébastien Faro",
        job: "dev backend",
        picture: ''
    }
];

const server = setupServer(
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        return res(ctx.json({ freelancersList: freelancersMockedData }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe("freelances component", () => {

    it('Should display freelancers names', async () => {
        render(<Freelances />);
        await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
        await waitFor(() => {
            expect(screen.getByText('Harry Potter')).toBeTruthy();
            expect(screen.getByText('Sébastien Faro')).toBeTruthy();
        });
    });

});
