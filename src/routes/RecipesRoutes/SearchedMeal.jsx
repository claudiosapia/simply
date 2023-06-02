import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Col, Card, Row} from 'antd';
import {Link} from 'react-router-dom';

const SearchedMeal = () => {
    const [searchedMeals, setSearchedMeals] = useState([]);
    let params = useParams();

    const getSearchedMeals = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearchedMeals(recipes.results);
    }

    useEffect(() => {
        // path="/searched/:search" in 'Pages' Component
        getSearchedMeals(params.search);
    },[params.search])

    return (
        <Row gutter={[20,20]} className= "searchedRecipe-card-container"> 

                {searchedMeals.map((item) => (
     <Col span={6}>
          <Link to={`/recipe/${item.id}`}>
            <Card className="recipe-card" key={item.id}>
                
                        <h4>{item.title}</h4>
                        <img src={item.image} alt={item.title}/>
                        
                    </Card>
                    </Link>
                    </Col>
                ))}
          
            </Row>
    );
}




export default SearchedMeal;