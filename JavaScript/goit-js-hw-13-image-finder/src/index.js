import refs from './js/refs';
import { loadMore, formInputSubmit, openModal } from './js/markup';
import './styles.css';

refs.loadMoreBtn.addEventListener('click', loadMore);
refs.form.addEventListener('submit', formInputSubmit);
refs.gallery.addEventListener('click', openModal);
