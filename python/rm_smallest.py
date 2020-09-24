def rm_smallest(d):
    if not bool(d):
        return d
    l = []
    for i in d:
        value = d.get(i)
        l.append(value)
    minval = min(l)
    for i in d:
        if d.get(i) == minval:
            minkey = i
            break
    d.pop(minkey)
    return d

def test():
    assert 'a' in rm_smallest({'a':1,'b':-10}).keys()
    assert not 'b' in rm_smallest({'a':1,'b':-10}).keys()
    assert not 'a' in rm_smallest({'a':1,'b':5,'c':3}).keys()
    rm_smallest({})
    print("Success!")

if __name__ == "__main__":
    test()