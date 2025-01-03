# Unexpected Null Return in JavaScript Function

This repository demonstrates a common JavaScript error involving unexpected null returns from a function due to improper null handling.  The original code returns `null` if either input is `null`, which may not be the desired behavior in all cases.

## Bug

The `foo` function returns `null` if either `a` or `b` is `null`. This behavior might be unexpected or lead to errors in the calling code.

## Solution

The improved `foo` function addresses this by either returning 0 if a null value is encountered or throwing a descriptive error. The solution provides both approaches.  Choose the version that suits your application's requirements.
