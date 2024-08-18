import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code 
  const nameInput = screen.getByLabelText(/name/i);
  expect(nameInput).toBeInTheDocument();

  
  const emailInput = screen.getByLabelText(/email/i);
  expect(emailInput).toBeInTheDocument();
});


test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  
  
  
    const checkbox1 = screen.getByLabelText(/interest 1/i);
    const checkbox2 = screen.getByLabelText(/interest 2/i);
    const checkbox3 = screen.getByLabelText(/interest 3/i);
  
    expect(checkbox1).toBeInTheDocument();
    expect(checkbox2).toBeInTheDocument();
    expect(checkbox3).toBeInTheDocument();
  });
  

test("the checkboxes are initially unchecked", () => {
  // your test code here
  

    
    const checkbox1 = screen.getByLabelText(/interest 1/i);
    const checkbox2 = screen.getByLabelText(/interest 2/i);
    const checkbox3 = screen.getByLabelText(/interest 3/i);
  
    expect(checkbox1).not.toBeChecked();
    expect(checkbox2).not.toBeChecked();
    expect(checkbox3).not.toBeChecked();
  });
  


// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
  const checkbox1 = screen.getByLabelText(/interest 1/i);
  const checkbox2 = screen.getByLabelText(/interest 2/i);
  const checkbox3 = screen.getByLabelText(/interest 3/i);

  expect(checkbox1).not.toBeChecked();
  expect(checkbox2).not.toBeChecked();
  expect(checkbox3).not.toBeChecked();
});


test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
  
    
  
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.click(screen.getByLabelText(/interest 1/i)); // assuming an interest checkbox is checked
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  
    
    expect(screen.getByText(/form submitted successfully!/i)).toBeInTheDocument();
  });
  
  
    const checkbox1 = screen.getByLabelText(/interest 1/i);
    const checkbox2 = screen.getByLabelText(/interest 2/i);
    const checkbox3 = screen.getByLabelText(/interest 3/i);
  
    
    expect(checkbox1).not.toBeChecked();
    expect(checkbox2).not.toBeChecked();
    expect(checkbox3).not.toBeChecked();
  
    
    fireEvent.click(checkbox1);
    fireEvent.click(checkbox2);
  
    
    expect(checkbox1).toBeChecked();
    expect(checkbox2).toBeChecked();
    expect(checkbox3).not.toBeChecked();

  


test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
  
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.click(screen.getByLabelText(/interest 1/i)); // assuming an interest checkbox is checked
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  
    
    expect(screen.getByText(/form submitted successfully!/i)).toBeInTheDocument();
  });
  

