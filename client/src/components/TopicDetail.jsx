import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TopicDetail() {

  const { subjectId, topicId } = useParams();
  const [topicData, setTopicData] = useState(null);

  useEffect(() => {
    fetch(`/topics/${subjectId}/${topicId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTopicData(data);
      })
      .catch(error => {
        console.error('There was an issue fetching your data: ', error);
      });
  }, [subjectId, topicId]);

  if (!topicData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{topicId}</h1>
      <ul>
        {topicData.map((entry, index) => {
        
          const key = Object.keys(entry)[0];
          return <li key={index}>{`${key}: ${entry[key]}`}</li>;
        })}
      </ul>
    </div>
  );
}

export default TopicDetail;
