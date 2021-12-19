import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import {CatType} from '../types/cats'


interface Props {
    cats: CatType[],
    showOnlyLike: boolean,
    deleteCatHandler(id: string): void,
    likeCatHandler(id: string): void,
    showOnlyLikeHandler(): void,
}
export const Main = ({cats,deleteCatHandler, showOnlyLike, likeCatHandler, showOnlyLikeHandler }: Props) => {
    return<main>
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Тестовое приложение с котами
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Пришедшие данные хранятся в сторе.
                    На карточке должна быть иконка лайка. При нажатии на которую, ставится или убирается лайк. Иконка должна подкрашиваться, когда залайкана.
                    На карточке должна быть иконка удаления. При нажатии на которую, карточка удаляется.
                    Сверху должна быть кнопка фильтра, которая по нажатию показывает только залайканые карточки. При отжатии опять показываются все карточки.
                    Дизайн не важен, главное, чтобы было просто и аккуратно.

                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained" disabled={!cats.length} onClick={showOnlyLikeHandler}>{showOnlyLike ? 'Показать все' : 'Показать залайканные'}</Button>
                </Stack>
            </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {cats.map((cat) => showOnlyLike && !cat.like ? null : (
                    <Grid item key={cat.id} xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="img"
                                image={cat.url}
                                alt={`cat number ${cat.id}`}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                            </CardContent>
                            <CardActions>
                                {cat.like ? <FavoriteIcon sx={{mr: 2}} color={'secondary'} onClick={() => {likeCatHandler(cat.id)}}/> : <FavoriteIcon sx={{mr: 2}} color={'primary'} onClick={() => {likeCatHandler(cat.id)}}/> }
                                <DeleteIcon sx={{mr: 2}} onClick={()=> {deleteCatHandler(cat.id)}} />
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </main>
}