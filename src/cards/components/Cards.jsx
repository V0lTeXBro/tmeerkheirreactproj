import { Grid, Typography } from "@mui/material";
import { arrayOf } from "prop-types";
import React, { useState } from "react";
import { Container, Button, Modal, TextField } from "@mui/material";
import cardType from "../models/types/cardType";
import CardBussinesComponent from "./card/CardBussinesComponent";
import LoopIcon from "@mui/icons-material/Loop";
import jwtDecode from "jwt-decode";
import { getCard } from "../services/cardApiService";
import useCards from "../hooks/useCards";
import FormButton from "../../forms/components/FormButton";



export default function Cards({ cards, handleDelete ,handleCreate }) {
  const {
    handleLikeCard,
  } = useCards();

  

  const handleEdit = (id) => {
    console.log(`Card ${id} is Edited`);
  };
  const handleLike = async (id) => {
    
    const card = await getCard(id);
    
    handleLikeCard(card._id);
    
    console.log(card);
    
  };
  return (
    <>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CardBussinesComponent
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleLike={handleLike}
              handleCreate={handleCreate}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

Cards.propTypes = {
  cards: arrayOf(cardType),
};
