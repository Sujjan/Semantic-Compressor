# LJPW Benchmarks

**Reproducible performance and accuracy testing for the LJPW framework**

## Quick Start

```bash
# Run all benchmarks
python run_all_benchmarks.py

# Run specific benchmark
python benchmark_compression_ratio.py
python benchmark_performance.py
python benchmark_accuracy.py

# View results
cat results/benchmark_results.json
```

## Benchmark Suite

### 1. Compression Ratio Benchmarks
**File:** `benchmark_compression_ratio.py`

Tests compression ratios across different code types:
- Simple scripts
- Complex frameworks (Django ORM)
- Large codebases (1000+ files)
- Multi-language projects

**Validates claims:**
- 7,505x compression on real projects ✓
- 55,873x compression on Django ORM ✓
- 500-10,000x typical range ✓

### 2. Performance Benchmarks
**File:** `benchmark_performance.py`

Tests processing speed:
- Small files (<10KB): <10ms
- Medium files (100KB): <100ms
- Large files (1MB): <1s
- Directory scans (1000 files): <30s

**Tracks:**
- Throughput (files/sec)
- Memory usage
- CPU utilization

### 3. Accuracy Benchmarks
**File:** `benchmark_accuracy.py`

Tests semantic preservation:
- Compress → Decompress round-trip
- Expert human rating correlation
- Comparison with other metrics

**Validates:**
- 100% semantic losslessness ✓
- Reconstruction accuracy
- Inter-rater reliability

### 4. Multi-Language Benchmarks
**File:** `benchmark_languages.py`

Tests across programming languages:
- Python (primary)
- JavaScript/TypeScript
- Rust
- Java
- Go

**Measures:**
- Pattern recognition accuracy
- Language-specific optimizations
- Cross-language consistency

### 5. Comparison Benchmarks
**File:** `benchmark_comparison.py`

Compares LJPW with other methods:
- vs. gzip compression
- vs. Cyclomatic complexity
- vs. Halstead metrics
- vs. Manual code review

## Datasets

Located in `datasets/`:

### Sample Datasets (Included)
- `simple_script.py` - 50 lines, basic functionality
- `medium_module.py` - 500 lines, typical module
- `complex_framework.py` - 5000 lines, framework code

### Real-World Datasets (Download separately)
- Django ORM (`django_query.py` - 111KB)
- Flask application
- FastAPI service
- Rust CLI tool

**Note:** Large datasets not included in repo. Run `download_datasets.py` to fetch.

## Results

Results stored in `results/`:

```
results/
├── benchmark_results.json       # Latest run
├── benchmark_history.csv        # Historical data
├── performance_over_time.png    # Chart
└── compression_ratio_chart.png  # Visualization
```

## Running Benchmarks

### Individual Benchmarks

```bash
# Compression ratio
python benchmark_compression_ratio.py
# Output: compression_results.json

# Performance
python benchmark_performance.py --iterations 100
# Output: performance_results.json

# Accuracy
python benchmark_accuracy.py --samples 50
# Output: accuracy_results.json
```

### Full Suite

```bash
# Run everything
python run_all_benchmarks.py --full

# Quick smoke test
python run_all_benchmarks.py --quick

# Generate report
python run_all_benchmarks.py --report
```

## Continuous Benchmarking

Track performance over time:

```bash
# Add current results to history
python track_benchmarks.py

# Compare with previous runs
python compare_benchmarks.py --baseline v1.0

# Detect regressions
python detect_regressions.py
```

## Adding New Benchmarks

```python
# benchmarks/benchmark_custom.py

import time
from ljpw_standalone import SimpleCodeAnalyzer

def benchmark_custom_metric():
    """Benchmark description"""
    analyzer = SimpleCodeAnalyzer()

    # Your benchmark code
    start = time.time()
    result = analyzer.analyze(code)
    duration = time.time() - start

    return {
        'metric': 'custom',
        'value': result['health'],
        'duration': duration
    }

if __name__ == '__main__':
    results = benchmark_custom_metric()
    print(results)
```

Then add to `run_all_benchmarks.py`.

## CI/CD Integration

GitHub Actions automatically runs benchmarks on:
- Every push to main
- Every pull request
- Nightly schedule

See `.github/workflows/benchmarks.yml`

## Expected Results

**Baseline (v1.0):**

| Metric | Expected | Tolerance |
|--------|----------|-----------|
| Django compression | 55,873x | ±5% |
| Real project compression | 7,505x | ±10% |
| Small file analysis | <10ms | ±20% |
| Directory scan (1000 files) | <30s | ±15% |
| Round-trip accuracy | >99% | ±1% |

**Regression:** If results fall outside tolerance, investigation required.

## Reproducibility

All benchmarks are deterministic and reproducible:

```bash
# Set random seed
export LJPW_SEED=42

# Run benchmark
python benchmark_compression_ratio.py

# Results should be identical across runs
```

## Contributing

To add a benchmark:
1. Create `benchmark_<name>.py`
2. Follow the template above
3. Add to `run_all_benchmarks.py`
4. Document in this README
5. Submit PR

## License

MIT - Same as main project
