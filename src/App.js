import React, { useState, useEffect } from "react";
import { useSelector, useStore } from 'react-redux';
import ViewComponent from "./component/ViewComponent";
const App = () => {
    const store = useStore();
    const [details, setDetails] = useState(
        {
            'mylist': [
                {
                    'title': 'Futurama',
                    'id': 1,
                    'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
                },
                {
                    'title': 'The Interview',
                    'id': 2,
                    'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
                },
                {
                    'title': 'Gilmore Girls',
                    'id': 3,
                    'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
                }
            ],
            'recommendations': [
                {
                    'title': 'Family Guy',
                    'id': 4,
                    'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
                },
                {
                    'title': 'The Croods',
                    'id': 5,
                    'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
                },
                {
                    'title': 'Friends',
                    'id': 6,
                    'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
                }
            ]
        },
        
    );
    useEffect(() => {
        store.dispatch({ type: 'DETAILS_SUCCESS', Mylist:details.mylist,recommendations:details.recommendations });
    }, []);
    let FirstList = useSelector(state => state && state.Mylist && state.Mylist);
    let recommend = useSelector(state => state && state.recommendations && state.recommendations);
    let handleClick=(data,status)=>{
        let recent = "";
        if(status === "remove"){
            let arr = FirstList;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id === data) {
                    arr.splice(i, 1);
                }
            }
             recent = FirstList.filter((item, index) => item.id !== data)
             store.dispatch({ type: 'DETAILS_SUCCESS', Mylist:recent,recommendations:recommend });
        }else if(status === "add"){
            recent = [...FirstList,recommend.find((item, index) => item.id === data)]
            store.dispatch({ type: 'DETAILS_SUCCESS', Mylist:recent,recommendations:recommend });
        }
    }

  
    return (
        <div className="container">
            <ViewComponent caption="My List" status="remove" BtnText={"Remove"} List={FirstList} handleClick={handleClick}/>
            <ViewComponent caption="Recommendations" status="add" BtnText={"Add"} List={recommend} handleClick={handleClick}/>
        </div>
    )
}
export default App;