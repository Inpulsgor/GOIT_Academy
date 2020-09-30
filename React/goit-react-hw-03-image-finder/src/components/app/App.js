import React, { Component } from "react";
import { Fetch } from "../../services/api";
import Searchbar from "../searchbar/Searchbar";
import ImageGallery from "../imageGallery/ImageGallery";
import Button from "../button/Button";
import Loader from "react-loader-spinner";
import Modal from "../modal/Modal";
import styles from "./App.module.css";

class App extends Component {
  state = {
    page: 1,
    images: [],
    searchQuery: "",
    largeImage: null,
    showModal: false,
    loading: false,
    fetch: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery === searchQuery) return;
    this.onFetch();
  }

  onFetch = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });

    Fetch(searchQuery, page)
      .then((data) => {
        this.setState((prev) => ({
          images: [...prev.images, ...data],
          page: prev.page + 1,
        }));
        if (!this.state.fetch) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ loading: false, fetch: false });
      });
  };

  stateSubmit = (inputValue) => {
    this.setState({
      searchQuery: inputValue,
      fetch: true,
      page: 1,
      images: [],
    });
  };

  openModal = (imageUrl) => {
    this.setState({ largeImage: imageUrl });
  };
  closeModal = (e) => {
    this.setState({ largeImage: null });
  };

  render() {
    const { images, largeImage, loading } = this.state;

    return (
      <section className={styles.App}>
        <Searchbar onSubmit={this.stateSubmit} />
        <ImageGallery images={images} onClick={this.openModal} />
        {loading && (
          <Loader
            type="TailSpin"
            color="orange"
            height={70}
            width={70}
            timeout={3000}
          />
        )}
        {largeImage && (
          <Modal largeImage={largeImage} onClose={this.closeModal} />
        )}
        {images.length > 0 && !loading && <Button onClick={this.onFetch} />}
      </section>
    );
  }
}

export default App;
