import { cssSpace, cssSun, cssPlanet } from './style';

const Solar = ({ number }) => {
  const planets = [];
 

    for(var i=0;i<number;i++){
       planets.push(<div key={i+1} className={cssPlanet(i)} />)
    }

  return (
    <div className={cssSpace}>
      {/* <div className={cssSun}/> */}
      {/* answer */}
      <div className={cssSun}>
        {planets}
      </div>
    </div>
    
  )
};

export default Solar;
