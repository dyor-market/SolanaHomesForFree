import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
let toanswer = []
let arweaves = []
export default function Home() {

  let { address } = useParams();
  let [answer, setAnswer] = useState([]);
  setTimeout(async function(){
  let answer = await fetch("https://kiyomi-service-k3yg9wlgi-opendive.vercel.app/query/nftAccountsMetadata/"+address+"?limit=1000&offset=0")
  const data = (await answer.json()).data
  for (var d in data){

    let arweave = data[d].data.uri  
    if (!arweaves.includes(arweave)){
      arweaves.push(arweave)
let answer2 = await fetch(arweave)

const data2 = await (answer2.json())
    let name = data2.name

const image = data2.image
if (!toanswer.includes({name: name, image: image})){
toanswer.push({name: name, image: image})
  }

  }
}
setAnswer(toanswer)
  }, 1)
  return(
    <div>
    <h4> <Link to={`/fair3d`} key={'f3d'}>

    Feeling Lucky?

    </Link><br /><Link to={`/linksnthat`} key={'lnt'}>

    DYOR?

    </Link></h4>
   <h2>{address}</h2>
{answer.map((item, index) => (
   <div>
<h3>{item.name}</h3>
<img style={{width:"20%"}} src={item.image} />
        </div>
))}
        </div>
   )
}