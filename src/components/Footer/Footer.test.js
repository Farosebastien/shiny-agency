import Footer from "./Footer";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../utils/test/index";

describe("Footer", () => {
    test("Should render without crash", async () => {
        render(
                <Footer />
        )
    });

    test("change theme", () => {
        render(
                <Footer />
        )
        const nightModeButton = screen.getByRole("button");
        expect(nightModeButton.textContent).toBe("Changer de mode : light");
        fireEvent.click(nightModeButton);
        expect(nightModeButton.textContent).toBe("Changer de mode : dark");
    });

});