import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import ProductosList from '../components/ProductosList';



export default function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.table(data);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/productos')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

    
 
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Productos:</Text>
          <FlatList
            data={data}
            imagen={data.image}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              
              <Text>{item.id + '. ' + item.nombre + ' \n ' + item.descripcion + '.' +  item.precio + '.' + item.image}</Text>
              
              
            )}
            
          />
          
        </View>
        

      )}
        
    </View>
    
    
  );

};