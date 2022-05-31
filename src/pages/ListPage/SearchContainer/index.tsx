import { useState } from 'react';
import searchContainerCss from './searchContainerCss';
import classnames from 'classnames';

const CHECKBOX_DATA = [
  { id: 'hana0', value: '하나생명' },
  { id: 'uegene0', value: '유진자산운용사' },
  { id: 'hana1', value: '하나생명2' },
  { id: 'uegene1', value: '유진자산운용사2' },
  { id: 'hana2', value: '하나생명3' },
  { id: 'uegene2', value: '유진자산운용사3' },
  { id: 'hana3', value: '하나생명4' },
  { id: 'uegene3', value: '유진자산운용사4' },
  { id: 'hana4', value: '하나생명5' },
  { id: 'uegene4', value: '유진자산운용사5' },
  { id: 'hana5', value: '하나생명6' },
  { id: 'uegene5', value: '유진자산운용사6' },
  { id: 'hana6', value: '하나생명7' },
  { id: 'uegene6', value: '유진자산운용사7' },
  { id: 'hana7', value: '하나생명8' },
  { id: 'uegene7', value: '유진자산운용사8' },
  { id: 'hana8', value: '하나생명9' },
  { id: 'uegene8', value: '유진자산운용사9' },
  { id: 'hana9', value: '하나생명10' },
  { id: 'uegene9', value: '유진자산운용사10' },
  { id: 'hana10', value: '하나생명11' },
  { id: 'uegene10', value: '유진자산운용사11' },
  { id: 'hana11', value: '하나생명12' },
  { id: 'uegene11', value: '유진자산운용사12' },
  { id: 'hana12', value: '하나생명13' },
  { id: 'uegene12', value: '유진자산운용사13' },
];
const ID_ARRAY = CHECKBOX_DATA.map((el) => el.id);

type dataType = {
  id: string;
  value: string;
};
type FilterTagProps = {
  data: dataType;
  popTag: (id: string) => void;
};
const FilterTag = ({ data, popTag }: FilterTagProps) => {
  return (
    <span className="tag" onClick={() => popTag(data.id)}>
      {data.value}
      <img src={`/asset/bx-x.png`} alt="tag-delete" width="13px" />
    </span>
  );
};
type CheckBlockProps = {
  id: string;
  value: string;
  checked: boolean;
  handleChecked: () => void;
};
const CheckBlock = ({ id, value, checked, handleChecked }: CheckBlockProps) => {
  return (
    <div className="check-block">
      <input type="checkbox" id={id} checked={checked} onChange={handleChecked} />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

const SORT_LIST = ['Last Update', '1M', '3M', '6M'];

const SearchContainer = () => {
  const [checkedArr, setCheckedArr] = useState(new Array(CHECKBOX_DATA.length).fill(false));
  const [selected, setSelected] = useState<dataType[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(SORT_LIST[0]);

  const handleSelectSort = (item: string) => {
    setSelectedSort(item);
    setSortOpen(false);
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };
  const toggleSort = () => {
    setSortOpen(!sortOpen);
  };

  const handleChecked = (index: number, id: string, value: string) => {
    if (checkedArr[index]) {
      popTag(id);
      return;
    }

    pushTag(id, value);
  };

  const pushTag = (id: string, value: string) => {
    setSelected((prev) => [...prev, { id, value }]);
    const index = ID_ARRAY.indexOf(id);
    setCheckedArr((checkedArr) => {
      const temp = [...checkedArr];
      temp[index] = true;
      return temp;
    });
  };

  const popTag = (id: string) => {
    setSelected((prev) => prev.filter((el) => el.id !== id));
    const index = ID_ARRAY.indexOf(id);
    setCheckedArr((checkedArr) => {
      const temp = [...checkedArr];
      temp[index] = false;
      return temp;
    });
  };

  return (
    <div css={searchContainerCss.container}>
      <input css={[searchContainerCss.searchInput]} type="text" placeholder="Search" className="search-input" />
      <div css={searchContainerCss.filter} className="customer-filter">
        <div
          className={classnames('inner-input', {
            'open-filter-board': filterOpen,
          })}
        >
          <input
            type="text"
            placeholder="Filter Tags"
            // onBlur={() => setFilterOpen(false)}
            onFocus={() => setFilterOpen(true)}
          />
          <img src={`/asset/bx-arrow-down.png`} alt="arrow-down" width="24px" onClick={toggleFilter} />
        </div>

        {filterOpen && (
          <div className="option-board">
            <div className="tags-container">
              {selected?.map((el) => (
                <FilterTag key={el.id} data={el} popTag={popTag} />
              ))}
            </div>
            <div className="checklist-wrapper">
              {CHECKBOX_DATA.map((el, i) => (
                <CheckBlock
                  key={el.id}
                  id={el.id}
                  value={el.value}
                  checked={checkedArr[i]}
                  handleChecked={() => handleChecked(i, el.id, el.value)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <button css={searchContainerCss.filterApplyButton}>Apply</button>

      <div css={searchContainerCss.selectWrapper} className="select-wrapper">
        <p className={classnames('label', { 'open-sort-board': sortOpen })} onClick={toggleSort}>
          {selectedSort} <span className="select-arrow"></span>
        </p>
        {sortOpen && (
          <ul className="option-list">
            {SORT_LIST.filter((el) => el !== selectedSort).map((sortItem) => (
              <li key={sortItem} className="option-item" onClick={() => handleSelectSort(sortItem)}>
                {sortItem}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button css={searchContainerCss.sortButton}>
        <img src={`/asset/bx-sort-down.png`} alt="sort-btn" />
      </button>
    </div>
  );
};

export default SearchContainer;
