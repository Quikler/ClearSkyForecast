namespace Backend.Utils.Extensions;

public static class MathExtensions
{
    public static int EvaluateKelvin(this float number) => (int)(number - 272.15d);
}