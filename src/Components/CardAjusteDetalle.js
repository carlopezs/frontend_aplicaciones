import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import carrito from "../assets/carrito.png";
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(() => ({
  action: {
    backgroundColor: '#fff',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
  },
 
}));

export const CardAjusteDetalle = ({ product, setProducts }) => {
  const styles = useStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 6 });
  const avatarStyles = useDynamicAvatarStyles({ radius: 12, size: 48 });

  
  return (
    <Row marginBottom={1} p={1.5} gap={2} bgcolor={'#E5EBEC'} borderRadius={16} width={400}  >
      <Item >
        <Avatar
          classes={avatarStyles}
          src={
            carrito
          }
        />
      </Item>
      <Info position={'middle'} useStyles={useTutorInfoStyles}>
        <InfoTitle>{product.pro_nombre}{" "}</InfoTitle>
        <InfoSubtitle>{product.pro_stock}{" "}</InfoSubtitle>
      </Info>
      <Item ml={1} position={'middle'}  style={{marginLeft:'auto'}}  >
       
      <TextField
          id="standard-number"
          label="Cantidad"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
       
      </Item>
      
    </Row>
  );
};

export default CardAjusteDetalle