// Build Tower

class Kata
{
public:
    std::vector<std::string> towerBuilder(int nFloors)
    {
        std::vector<std::string> res;
        for (int i = 0; i < nFloors; i++) {
          res.push_back(
            std::string(nFloors - i - 1, ' ') + std::string(2 * i + 1, '*') + std::string(nFloors - i -1, ' ')
          );
        }
        return res;
    }
};
