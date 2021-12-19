import React, {useEffect, useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getCats, likeCat, deleteCat} from './store/actions/cats'
import {RootState} from './store/store'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Bar} from './components/Bar'
import {Main} from './components/main'

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
  }
});

function App() {
  const [showOnlyLike, setShowOnlyLike] = useState(false)
  const dispatch = useDispatch()
  const {cats} = useSelector((state: RootState) => state.cats)

  const likeCatHandler = useCallback((id: string) => {
    dispatch(likeCat(id))
  }, [])
  const deleteCatHandler = useCallback((id: string) => {
    dispatch(deleteCat(id))
  }, [])
  const showOnlyLikeHandler = useCallback(() => {
    setShowOnlyLike(prev => !prev)
  }, [])
  useEffect(() => {
    dispatch(getCats())
  }, [])
  return (
      <ThemeProvider theme={theme}>
        <Bar/>
        <Main cats={cats} showOnlyLike={showOnlyLike} deleteCatHandler={deleteCatHandler} likeCatHandler={likeCatHandler} showOnlyLikeHandler={showOnlyLikeHandler}/>
      </ThemeProvider>
  );
}

export default App;
