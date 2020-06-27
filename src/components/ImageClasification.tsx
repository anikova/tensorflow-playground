import React, { useEffect, useState } from 'react';
// @ts-ignore
import ml5 from 'ml5';

const ImageClasification = () => {
  const [result, setResult] = useState();
  const classifyImg = () => {
    const classifier = ml5.imageClassifier('MobileNet', modelLoaded);

    function modelLoaded() {
      console.log('Model Loaded!');
    }
    const image = document.getElementById('image');
    classifier.predict(image, 5, function(err: any, results: any) {
      if (results) {
        setResult(results[0]);
      }
    });
  };

  useEffect(() => {
    classifyImg();
  }, []);

  return (
    <>
      <img id="image" src="download.png" alt="" width="50%" />
      {result ? (
        <>
          <div>{result.label}</div>
          <div>{result.confidence}</div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ImageClasification;
