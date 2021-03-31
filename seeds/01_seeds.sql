INSERT INTO users (name, email, password)
VALUES ('Reggi', 'reggi@lightbnb.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Lucille', 'lucille@lightbnb.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Riley', 'riley@lightbnb.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Russell', 'russell@lightbnb.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code)
VALUES
(1, 'House of Reggi', 'description', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', '13337', 4, 4, 4, 'Canada', '123 Sesame Street', 'Toronto', 'Ontario', 'A1B 2C3'),
(2, 'Box of Lucille', 'description', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', '13337', 4, 4, 4, 'Canada', '123 Sesame Street', 'Toronto', 'Ontario', 'A1B 2C3'),
(3, 'Corner of Riley', 'description', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', '13337', 4, 4, 4, 'Canada', '123 Sesame Street', 'Toronto', 'Ontario', 'A1B 2C3'),
(4, 'Crib of Russell', 'description', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', '13337', 4, 4, 4, 'Canada', '123 Sesame Street', 'Toronto', 'Ontario', 'A1B 2C3');

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES
('2021-04-01', '2021-04-08', 1, 2),
('2021-04-01', '2021-04-08', 2, 3),
('2021-04-01', '2021-04-08', 3, 4),
('2021-04-01', '2021-04-08', 4, 1);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES
(2, 1, 1, 5, 'messages'),
(3, 2, 1, 5, 'messages'),
(4, 3, 1, 5, 'messages'),
(1, 4, 1, 5, 'messages');