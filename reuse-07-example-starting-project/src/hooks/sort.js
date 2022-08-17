import { ref, computed } from 'vue';

export default function useSort(item, sortProp) {
  const sorting = ref(null);
  const displayedUsers = computed(function () {
    if (!sorting.value) {
      return item.value;
    }
    return item.value.slice().sort((u1, u2) => {
      if (sorting.value === 'asc' && u1[sortProp] > u2[sortProp]) {
        return 1;
      } else if (sorting.value === 'asc') {
        return -1;
      } else if (sorting.value === 'desc' && u1[sortProp] > u2[sortProp]) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  function sort(mode) {
    sorting.value = mode;
  }

  return {sorting, displayedUsers, sort };
}
