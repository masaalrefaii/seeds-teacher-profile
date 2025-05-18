import React, { useState } from 'react';
import './App.css';
import profilePic from '/Users/masa/Documents/seeds-teacher-profile/src/profile.png';

function App() {
  const teacher = {
    name: "Fatima Al-Hassan",
    subject: "Qur’an & Arabic",
    rating: 4.5,
    languages: ["Arabic (Native)", "English (Fluent)"],
    bio: "A native Arabic speaker with 8+ years of experience teaching Qur’an and Tajweed to children and adults.",
    courses: [
      {
        title: "Qur’an Recitation for Beginners",
        duration: "4 weeks",
        level: "Beginner",
        description: "Learn correct pronunciation and basic memorization techniques.",
        goal: "Build confidence in reciting with accuracy.",
        schedule: "Every Mon & Wed, 5-6 PM"
      },
      {
        title: "Tajweed and Qaida Al Norania",
        duration: "6 weeks",
        level: "Intermediate",
        description: "Master the rules of Tajweed through structured Qaida lessons.",
        goal: "Achieve fluent and rule-based recitation.",
        schedule: "Tue & Thu, 4-5:30 PM"
      },
      {
        title: "Arabic Letters & Pronunciation",
        duration: "3 weeks",
        level: "Beginner",
        description: "Understand each Arabic letter's sound and articulation point.",
        goal: "Lay a strong foundation for reading Arabic correctly.",
        schedule: "Sat & Sun, 10-11 AM"
      }
    ]
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="profile-page">
      <img src={profilePic} alt="Teacher" className="profile-avatar" />
      <h1>{teacher.name}</h1>
      <h3>{teacher.subject}</h3>
      <p className="rating">Rating: {'★'.repeat(Math.floor(teacher.rating)) + (teacher.rating % 1 ? '½' : '')}</p>
      <p className="bio">{teacher.bio}</p>

      <div className="languages">
        <strong>Languages:</strong> {teacher.languages.join(', ')}
      </div>

      <h4>Courses Offered</h4>
      <div className="course-list">
        {teacher.courses.map((course, index) => (
          <div key={index} className="course-box">
            <button className="course-toggle" onClick={() => toggleExpand(index)}>
            {course.title} {expandedIndex === index ? '▲' : '▼'}
            </button>
            {expandedIndex === index && (
              <div className="course-details">
                <p><strong>Description:</strong> {course.description}</p>
                <p><strong>Duration:</strong> {course.duration}</p>
                <p><strong>Level:</strong> {course.level}</p>
                <p><strong>Goal:</strong> {course.goal}</p>
                <p><strong>Schedule:</strong> {course.schedule}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="book-button">Book a Session</button>
    </div>
  );
}

export default App;