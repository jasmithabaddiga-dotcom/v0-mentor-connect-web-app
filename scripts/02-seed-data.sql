-- Insert sample skills
INSERT INTO skills (name, category) VALUES
('Product Strategy', 'Product Management'),
('User Research', 'Product Management'),
('Agile', 'Project Management'),
('Leadership', 'Management'),
('Data Analysis', 'Analytics'),
('A/B Testing', 'Analytics'),
('Engineering Leadership', 'Engineering'),
('System Design', 'Engineering'),
('Team Building', 'Management'),
('Scaling', 'Engineering'),
('Design Thinking', 'Design'),
('Creative Strategy', 'Design'),
('Innovation', 'Strategy'),
('Venture Capital', 'Finance'),
('Financial Analysis', 'Finance'),
('Due Diligence', 'Finance'),
('Portfolio Management', 'Finance'),
('Digital Marketing', 'Marketing'),
('Growth Strategy', 'Marketing'),
('Content Marketing', 'Marketing'),
('Analytics', 'Marketing'),
('Technical Leadership', 'Engineering'),
('Architecture', 'Engineering'),
('Strategic Planning', 'Strategy')
ON CONFLICT (name) DO NOTHING;

-- Insert sample users (mentors)
INSERT INTO users (email, password_hash, first_name, last_name, user_type, bio, location) VALUES
('sarah.chen@example.com', '$2b$10$example_hash_1', 'Sarah', 'Chen', 'mentor', 
 'Senior Product Manager at Google with 8 years of experience building consumer and enterprise products. Passionate about helping others navigate their tech careers.',
 'San Francisco, CA'),
('michael.rodriguez@example.com', '$2b$10$example_hash_2', 'Michael', 'Rodriguez', 'mentor',
 'VP of Engineering at Stripe with 12 years of experience scaling engineering organizations.',
 'New York, NY'),
('emily.johnson@example.com', '$2b$10$example_hash_3', 'Emily', 'Johnson', 'mentor',
 'Creative Director at IDEO with 10 years of experience in design thinking and innovation.',
 'San Francisco, CA'),
('david.park@example.com', '$2b$10$example_hash_4', 'David', 'Park', 'mentor',
 'Investment Director at Sequoia Capital with 15 years of experience in venture capital.',
 'Palo Alto, CA'),
('lisa.thompson@example.com', '$2b$10$example_hash_5', 'Lisa', 'Thompson', 'mentor',
 'Head of Marketing at HubSpot with 9 years of experience in growth strategies.',
 'Boston, MA'),
('james.wilson@example.com', '$2b$10$example_hash_6', 'James', 'Wilson', 'mentor',
 'Chief Technology Officer at Airbnb with 16 years of experience in technical leadership.',
 'San Francisco, CA')
ON CONFLICT (email) DO NOTHING;

-- Insert sample users (mentees)
INSERT INTO users (email, password_hash, first_name, last_name, user_type, bio, location) VALUES
('alex.johnson@example.com', '$2b$10$example_hash_7', 'Alex', 'Johnson', 'mentee',
 'Aspiring product manager looking to transition from engineering.',
 'Seattle, WA'),
('maria.garcia@example.com', '$2b$10$example_hash_8', 'Maria', 'Garcia', 'mentee',
 'Marketing professional seeking to advance to senior leadership roles.',
 'Austin, TX')
ON CONFLICT (email) DO NOTHING;

-- Insert mentor profiles
INSERT INTO mentor_profiles (user_id, title, company, industry, experience_years, hourly_rate, rating, total_sessions)
SELECT 
    u.id,
    CASE 
        WHEN u.first_name = 'Sarah' THEN 'Senior Product Manager'
        WHEN u.first_name = 'Michael' THEN 'VP of Engineering'
        WHEN u.first_name = 'Emily' THEN 'Creative Director'
        WHEN u.first_name = 'David' THEN 'Investment Director'
        WHEN u.first_name = 'Lisa' THEN 'Head of Marketing'
        WHEN u.first_name = 'James' THEN 'Chief Technology Officer'
    END,
    CASE 
        WHEN u.first_name = 'Sarah' THEN 'Google'
        WHEN u.first_name = 'Michael' THEN 'Stripe'
        WHEN u.first_name = 'Emily' THEN 'IDEO'
        WHEN u.first_name = 'David' THEN 'Sequoia Capital'
        WHEN u.first_name = 'Lisa' THEN 'HubSpot'
        WHEN u.first_name = 'James' THEN 'Airbnb'
    END,
    CASE 
        WHEN u.first_name IN ('Sarah', 'Michael', 'James') THEN 'Technology'
        WHEN u.first_name = 'Emily' THEN 'Design'
        WHEN u.first_name = 'David' THEN 'Finance'
        WHEN u.first_name = 'Lisa' THEN 'Marketing'
    END,
    CASE 
        WHEN u.first_name = 'Sarah' THEN 8
        WHEN u.first_name = 'Michael' THEN 12
        WHEN u.first_name = 'Emily' THEN 10
        WHEN u.first_name = 'David' THEN 15
        WHEN u.first_name = 'Lisa' THEN 9
        WHEN u.first_name = 'James' THEN 16
    END,
    CASE 
        WHEN u.first_name = 'Sarah' THEN 150.00
        WHEN u.first_name = 'Michael' THEN 200.00
        WHEN u.first_name = 'Emily' THEN 120.00
        WHEN u.first_name = 'David' THEN 300.00
        WHEN u.first_name = 'Lisa' THEN 130.00
        WHEN u.first_name = 'James' THEN 250.00
    END,
    CASE 
        WHEN u.first_name = 'Sarah' THEN 4.9
        WHEN u.first_name = 'Michael' THEN 4.8
        WHEN u.first_name = 'Emily' THEN 4.9
        WHEN u.first_name = 'David' THEN 4.7
        WHEN u.first_name = 'Lisa' THEN 4.8
        WHEN u.first_name = 'James' THEN 4.9
    END,
    CASE 
        WHEN u.first_name = 'Sarah' THEN 127
        WHEN u.first_name = 'Michael' THEN 89
        WHEN u.first_name = 'Emily' THEN 156
        WHEN u.first_name = 'David' THEN 73
        WHEN u.first_name = 'Lisa' THEN 112
        WHEN u.first_name = 'James' THEN 94
    END
FROM users u
WHERE u.user_type = 'mentor';

-- Insert mentor skills relationships
WITH mentor_skill_mapping AS (
    SELECT 
        mp.id as mentor_id,
        s.id as skill_id
    FROM mentor_profiles mp
    JOIN users u ON mp.user_id = u.id
    JOIN skills s ON (
        (u.first_name = 'Sarah' AND s.name IN ('Product Strategy', 'User Research', 'Agile', 'Leadership', 'Data Analysis', 'A/B Testing')) OR
        (u.first_name = 'Michael' AND s.name IN ('Engineering Leadership', 'System Design', 'Team Building', 'Scaling')) OR
        (u.first_name = 'Emily' AND s.name IN ('Design Thinking', 'Creative Strategy', 'Team Building', 'Innovation')) OR
        (u.first_name = 'David' AND s.name IN ('Venture Capital', 'Financial Analysis', 'Due Diligence', 'Portfolio Management')) OR
        (u.first_name = 'Lisa' AND s.name IN ('Digital Marketing', 'Growth Strategy', 'Content Marketing', 'Analytics')) OR
        (u.first_name = 'James' AND s.name IN ('Technical Leadership', 'Architecture', 'Innovation', 'Strategic Planning'))
    )
)
INSERT INTO mentor_skills (mentor_id, skill_id)
SELECT mentor_id, skill_id FROM mentor_skill_mapping
ON CONFLICT DO NOTHING;

-- Insert sample availability for mentors (Monday to Friday, 9 AM to 5 PM)
INSERT INTO mentor_availability (mentor_id, day_of_week, start_time, end_time)
SELECT 
    mp.id,
    generate_series(1, 5) as day_of_week, -- Monday to Friday
    '09:00:00'::time,
    '17:00:00'::time
FROM mentor_profiles mp;
