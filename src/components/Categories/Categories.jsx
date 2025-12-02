import styles from "./styles.module.css";

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <div className={styles.categories}>
      <button
        className={!selectedCategory ? styles.active : styles.item}
        onClick={() => setSelectedCategory(null)}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category)}
          className={
            selectedCategory === category ? styles.active : styles.item
          }
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
