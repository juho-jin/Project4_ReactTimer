import './My.css';
import MyTime from './MyTime';

function MyTick() {
  console.log("MyTick 컴포넌트");
  return (
    <div className='Anymation'>
        <h2 className='Myh2'>현재시간 : 
            <MyTime/>
        </h2>
    </div>
  );
}

export default MyTick;