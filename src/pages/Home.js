
import image from './image.png';

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    position: 'relative',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // dark overlay
    zIndex: 1,
  };

  const contentStyle = {
    zIndex: 2,
    textAlign: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2>🏠 Home Page</h2>
        <p>Welcome to My Homepage, Gaurav Here</p>
      </div>
    </div>
  );
}

export default Home;
  