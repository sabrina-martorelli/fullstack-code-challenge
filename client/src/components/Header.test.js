import { render, screen } from "@testing-library/react";
import Header from "./Header";


describe ('Header component', () => {

test('renders Book Corner title', ()=> {

//Arrange
render(<Header />);
//Act
//...

//Assert
const titleElement = screen.getAllByText('Book Corner');
expect(titleElement).toBeInTheDocument;

})


});