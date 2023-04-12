import { render, screen } from "@testing-library/react";
import AddBooks from "./AddBooks";


describe('AddBooks component', () => {


    test("renders default state", () => {
       
        const { getByTestId } = render(<AddBooks />);
        
        const title = getByTestId("Title");
        const author = getByTestId("Author");
        const description = getByTestId("Description");
        const published_date = getByTestId("Published Date");
        
        expect(title.value).toBe("");
        expect(author.value).toBe("");
        expect(description.value).toBe("");
        expect(published_date.value).toBe("");
       
      });


   
    
});
