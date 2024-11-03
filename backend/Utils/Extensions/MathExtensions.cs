namespace Backend.Utils.Extensions;

public static class MathExtensions
{
    public static int EvaluateKelvin(this float number) => (int)(number - 272.15d);
    public static int FromPercent(this float number) => (int)(number * 100);
}