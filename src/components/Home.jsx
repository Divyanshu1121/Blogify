import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; // Adjusted path because App.css is outside components

function Home() {
    return (
        <div>
            {/* Hero Section */}
            <div className="hero">
                <h1>Welcome to Blogify</h1>
                <p>Your one-stop platform to read, write, and explore a world of ideas.</p>
                <Link to="/blog">
                    <Button variant="light" size="lg">Explore Blogs</Button>
                </Link>
            </div>

            {/* Features */}
            <Container className="my-5">
                <Row className="text-center">
                    <Col>
                        <h2>Why Blogify?</h2>
                        <p>We're more than just a blog system. Here's what makes us special.</p>
                    </Col>
                </Row>
                <Row className="text-center mt-4">
                    <Col md={4}>
                        <Card className="feature-card">
                            <Card.Body>
                                <Card.Title>Write with Ease</Card.Title>
                                <Card.Text>Publish your thoughts in minutes using our clean editor.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="feature-card">
                            <Card.Body>
                                <Card.Title>Discover New Topics</Card.Title>
                                <Card.Text>Browse a range of categories from Tech to Health to Business.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="feature-card">
                            <Card.Body>
                                <Card.Title>Community Driven</Card.Title>
                                <Card.Text>Connect with passionate bloggers and readers across domains.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Categories */}
            <Container className="my-5">
                <h2 className="text-center mb-4">Popular Categories</h2>
                <Row className="text-center">
                    {["Entertainment", "Technology", "Sports", "Business", "Health", "Science"].map((cat, idx) => (
                        <Col md={4} className="mb-3" key={idx}>
                            <Card className="category-card">
                                <Card.Body>
                                    <Card.Title>{cat}</Card.Title>
                                    <Card.Text>Explore top blogs in {cat} and stay updated.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Call to Action */}
            <div className="cta-section">
                <h2>Start Blogging Today</h2>
                <p>Share your stories, insights, and experiences with the world.</p>
                <Link to="/addBlog">
                    <Button variant="light">Create a Blog</Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
