import Card from "./Card";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../utils/test/index";

describe("Card", () => {

    test("Should render title and image", async () => {
        render(
                <Card title="Harry Potter" label="Magicien frontend" picture="/myPicture.png" />
        );

        const cardPicture = screen.getByRole("img");
        const cardTitle = screen.getByText(/Harry/i);
        expect(cardPicture.src).toBe("http://localhost/myPicture.png");
        expect(cardTitle.textContent).toBe(" Harry Potter ");
    });

    test("Should add ⭐️ around title", async () => {
        render(
                <Card title="Harry Potter" label="Magicien frontend" picture="/myPicture.png" />
        );

        const cardTitle = screen.getByText(/Harry/i);
        const parentNode = cardTitle.closest("div");
        fireEvent.click(parentNode);
        expect(cardTitle.textContent).toBe(" ⭐️ Harry Potter ⭐️ ");
    });

});