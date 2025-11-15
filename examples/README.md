# LJPW Examples

**Runnable examples for the LJPW Semantic Compressor framework**

## Directory Structure

```
examples/
├── basic/              # Getting started examples
├── integrations/       # CI/CD, IDE, and tool integrations
└── advanced/           # Advanced use cases
```

## Quick Start

All examples are standalone and can be run directly:

```bash
# Basic usage
python basic/01_analyze_single_file.py
python basic/02_analyze_directory.py
python basic/03_compress_decompress.py

# Integrations
python integrations/github_action_example.py
python integrations/pre_commit_hook.py

# Advanced
python advanced/track_code_evolution.py
python advanced/multi_project_comparison.py
```

## Example Categories

### Basic Examples

Learn fundamental LJPW operations:

1. **01_analyze_single_file.py** - Analyze a single file
2. **02_analyze_directory.py** - Analyze entire project
3. **03_compress_decompress.py** - Compress & decompress
4. **04_interpret_scores.py** - Understand LJPW scores
5. **05_improve_code_quality.py** - Use insights to improve

### Integration Examples

Integrate LJPW into your workflow:

1. **github_action_example.py** - GitHub Actions template
2. **pre_commit_hook.py** - Pre-commit hook
3. **vscode_task.json** - VS Code integration
4. **ci_cd_pipeline.py** - CI/CD integration
5. **code_review_bot.py** - Automated code review

### Advanced Examples

Advanced patterns and techniques:

1. **track_code_evolution.py** - Track quality over time
2. **multi_project_comparison.py** - Compare projects
3. **custom_analyzer.py** - Build custom analyzer
4. **real_time_monitoring.py** - Real-time quality monitoring
5. **batch_analysis.py** - Analyze 1000+ files

## Learning Path

### Beginner (Start here!)

1. Run `basic/01_analyze_single_file.py`
2. Run `basic/04_interpret_scores.py`
3. Try analyzing your own code

### Intermediate

1. Run `basic/02_analyze_directory.py` on your project
2. Try `integrations/pre_commit_hook.py`
3. Experiment with `basic/05_improve_code_quality.py`

### Advanced

1. Try `advanced/track_code_evolution.py`
2. Build custom analyzer with `advanced/custom_analyzer.py`
3. Integrate into your CI/CD pipeline

## Requirements

Most examples have zero dependencies. Advanced examples may require:

```bash
pip install -r requirements-examples.txt
```

(Optional: only for advanced visualizations)

## Contributing Examples

Have a cool use case? Add it!

1. Create your example in appropriate directory
2. Add docstring explaining what it does
3. Make it runnable with `python your_example.py`
4. Update this README
5. Submit PR

## License

MIT - Same as main project
