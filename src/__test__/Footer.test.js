import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Footer from "../components/Footer"
import { amazonFooterLinks } from "../data"

jest.mock("../components/AboutFooter", () => () => 
  (<div data-testid="about-footer">AboutFooter</div>))

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it("renders AboutFooter component", () => {
    const aboutFooter = screen.getByTestId("about-footer")
    expect(aboutFooter).toBeInTheDocument()
  })

  it("renders all footer links from amazonFooterLinks data", () => {
    amazonFooterLinks.forEach(link => {
      const titleElement = screen.getByText(link.title)
      const descriptionElement = screen.getByText(link.description)

      expect(titleElement).toBeInTheDocument()
      expect(descriptionElement).toBeInTheDocument()
    })
  })

  it("renders all links in about section", () => {
    const links = screen.getAllByTestId("about-links")
    expect(links.length).toBe(26)
  })
})