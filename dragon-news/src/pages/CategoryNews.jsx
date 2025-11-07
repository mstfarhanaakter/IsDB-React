import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams()
    const data = useLoaderData();
    // console.log(id, data)
    
    const [categoryNews, setCategoryNews] = useState([]);


    useEffect(()=>{
        if(id == "0"){
            setCategoryNews(data)
            return
        }else if(id == "1"){
             const filterNews = data.filter((news)=> news.others.is_today_pick == true)
             setCategoryNews(filterNews)

        }else{
            const filterNews = data.filter((news)=> news.category_id == id)
        console.log(filterNews)
        setCategoryNews(filterNews)
        }
        
    }, [data, id]) // এখানে বোঝায়, যখনই data বা id পরিবর্তন হবে, তখন এই useEffect আবার চালু হবে।
    
    return (
        <div>
            <div className='font-bold mb-5'>
            Total <span className='text-secondary'>{categoryNews.length} </span>News Found
            </div>

            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news => 
                    <NewsCard 
                    news={news}
                    key={news.id}
                    
                    
                    ></NewsCard>)
                }

            </div>


            {/* CategoryNews- {id} */}
        </div>
    );
};

export default CategoryNews;