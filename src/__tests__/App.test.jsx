import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the hero headline and intro', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'We design, build, deploy and maintain digital products.' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Rubricks is a product engineering company in Gurgaon, India\./)).toBeInTheDocument()
  })

  it('renders primary navigation with anchor links', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getByRole('link', { name: 'Rubricks home' })).toHaveAttribute('href', '#top')
    for (const [name, href] of [
      ['Agency', '#agency'], ['Products', '#products'], ['Labs', '#labs'],
      ['Community', '#community'], ['Contact', '#contact'],
    ]) {
      expect(within(nav).getByRole('link', { name })).toHaveAttribute('href', href)
    }
  })

  it('renders the animated brick wall as SVG', () => {
    const { container } = render(<App />)
    const svg = container.querySelector('svg.wall-svg')
    expect(svg).toHaveAttribute('viewBox', '0 0 444 326')
    expect(svg).toHaveClass('animate')
    const rects = svg.querySelectorAll('rect')
    expect(rects).toHaveLength(82)
    expect(rects[0].style.getPropertyValue('--d')).toBe('850ms')
    expect(svg.querySelectorAll('rect.deep')).toHaveLength(11)
    expect(svg.querySelectorAll('rect.light')).toHaveLength(11)
  })

  it('renders the four division bricks with their anchor ids', () => {
    const { container } = render(<App />)
    expect(container.querySelector('#agency')).toHaveTextContent('Agency')
    expect(container.querySelector('#products')).toHaveTextContent('Products')
    expect(container.querySelector('#labs')).toHaveTextContent('Labs')
    expect(screen.getByRole('link', { name: /Agency.*How a project runs/s })).toHaveAttribute('href', '#process')
    expect(screen.getByRole('link', { name: /Community.*About the community/s })).toHaveAttribute('href', '#community')
  })

  it('renders the five process steps in order', () => {
    render(<App />)
    const list = screen.getByRole('list', { name: 'How a project runs' })
    const steps = within(list).getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(steps).toEqual([
      'You bring the project', 'Scope, proposal, design', 'Build', 'Deploy and deliver', 'Maintain',
    ])
  })

  it('renders community and contact mailto links', () => {
    render(<App />)
    const joins = screen.getAllByRole('link', { name: 'Join the community' })
    expect(joins.map((a) => a.getAttribute('href'))).toEqual([
      '#community',
      'mailto:hello@rubricks.in?subject=Joining%20Rubricks%20Community',
    ])
    expect(screen.getByRole('link', { name: 'Hire from the community' }))
      .toHaveAttribute('href', 'mailto:hello@rubricks.in?subject=Hiring%20from%20Rubricks%20Community')
    expect(screen.getByRole('link', { name: 'hello@rubricks.in' })).toHaveAttribute('href', 'mailto:hello@rubricks.in')
  })

  it('renders the footer company details', () => {
    render(<App />)
    expect(screen.getByText(/Rubricks Technologies Private Limited/)).toBeInTheDocument()
    expect(screen.getByText(`© ${new Date().getFullYear()} Rubricks`)).toBeInTheDocument()
  })
})
