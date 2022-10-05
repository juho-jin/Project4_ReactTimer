import './My.css';

function MyTime() {
  console.log("MyTick 컴포넌트");
  return (
    <div className='Time'>
        {new Date().toLocaleTimeString()}    
    </div>
  );
}

export default MyTime;