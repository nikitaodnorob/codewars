// Delete occurrences of an element if it occurs more than n times

std::vector<int> deleteNth(std::vector<int> arr, int n)
{
  std::map<int,int> counts;
  std::vector<int> res;
  res.reserve(arr.size());
  for (int x : arr) {
    if (counts.find(x) == counts.end()) counts.emplace(x, 1);
    else if (counts[x] >= n) continue;
    else counts[x]++;
    res.push_back(x);
  }
  return res;
}
