import axios from 'axios';

export const SaveButton = ({ canvasRef, setDrawings }) => {
  const handleSave = async () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL('image/png');

    try {
      const response = await axios.post(`${process.env.REACT_APP_DRAWING_APP_BACKEND_URL}/api/drawings`, {
        name: 'Untitled Drawing',
        image
      });
      setDrawings((prevDrawings) => [...prevDrawings, response.data]);
    } catch (error) {
      console.error('Failed to save the drawing:', error);
    }
  };

  return (
    <button onClick={handleSave}>Save</button>
  );
};