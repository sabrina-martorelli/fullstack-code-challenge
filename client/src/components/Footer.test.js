import { render, screen } from "@testing-library/react";
import Footer from "./Footer";


describe('Footer component', () => {
    
    test('should link', () => {

        //Arrange
        render(<Footer />);

        //Act 
        const links: HTMLAnchorElement[] = screen.getAllByRole("link");
        
        //Assert
        expect(links[0].textContent).toEqual("LinkedIn");
        expect(links[1].textContent).toEqual("Github");
        expect(links[2].textContent).toEqual("Email");
        
    



        
    });
    
});
