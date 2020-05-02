# Build Tower

### Instructions
Build Tower by the following given argument:

**number of floors** (integer and always greater than 0).

Tower block is represented as `*`

* Python: return a `list`;
* JavaScript: returns an `Array`;
* C#: returns a `string[]`;
* PHP: returns an `array`;
* C++: returns a `vector<string>`;
* Haskell: returns a `[String]`;
* Ruby: returns an `Array`;

##### Examples
a tower of 3 floors looks like below
```
[
  '  *  ', 
  ' *** ', 
  '*****'
]
```

and a tower of 6 floors looks like below
```
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
```

### Sample Tests:
```cpp
Describe(Tests)
{
    It(ExampleTest1)
    {
        std::vector<std::string> expected = { "*" };
        
        Kata kata;
        std::vector<std::string> actual = kata.towerBuilder(1);
    
        Assert::That(actual, Is().EqualTo(expected));
    }
    
    It(ExampleTest2)
    {
        std::vector<std::string> expected = { " * ", "***" };
        
        Kata kata;
        std::vector<std::string> actual = kata.towerBuilder(2);
    
        Assert::That(actual, Is().EqualTo(expected));
    }
    
    It(ExampleTest3)
    {
        std::vector<std::string> expected = { "  *  ", " *** ", "*****" };
        
        Kata kata;
        std::vector<std::string> actual = kata.towerBuilder(3);
    
        Assert::That(actual, Is().EqualTo(expected));
    }
};
```