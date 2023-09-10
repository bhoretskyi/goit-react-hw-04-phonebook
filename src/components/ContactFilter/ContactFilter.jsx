import { StyledFilter } from "./ContactFilter.styled";

export const ContactFilter = ({ filter, updateFilter }) => {
    return (
      <div>
        <label>
          Filter by name:
          <StyledFilter
            type="text"
            value={filter}
            onChange={e => updateFilter(e.target.value)}
          />
        </label>
      </div>
    );
  };