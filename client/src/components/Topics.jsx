import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/topics.css';

function Topics() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const [topics, setTopics] = useState(null);

  useEffect(() => {
    fetch('/Topics')
      .then(response => response.json())
      .then(data => {
        let currentSubjectTopics = data.subjects[subjectId]?.topics;
        if (currentSubjectTopics) {
          currentSubjectTopics = currentSubjectTopics.sort((a, b) => a.localeCompare(b));
          setTopics(currentSubjectTopics);
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [subjectId]);

  const handleTopicClick = (topic) => {
    navigate(`/subjects/${subjectId}/${topic}`);
  };  

  if (topics === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className='title'>{subjectId}</h1>
      <div className="button-container">
        {topics.map((topic, index) => (
          <button className="topic_button"
                  key={index}
                  onClick={() => handleTopicClick(topic)}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Topics;
