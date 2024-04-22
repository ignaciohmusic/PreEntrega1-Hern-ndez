import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const SearchWidget = () => {
  return (
    <Link to="">
      <Button variant="text"><SearchIcon style={{ color: '#000000' }} /></Button>
    </Link>
    
  )
}